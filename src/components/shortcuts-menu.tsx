import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { useQueueStore } from "@/stores/queue-slice";
import { toggleTrackFavorite } from "@/stores/tracks-slice";
import { MenuView } from "@react-native-menu/menu";
import { useRouter } from "expo-router";
import { FC, PropsWithChildren } from "react";
import TrackPlayer, { Track } from "react-native-track-player";
import { match } from "ts-pattern";

type Props = PropsWithChildren<{ track: Track }>;

const ShortcutsMenu: FC<Props> = ({ track, children }) => {
  const router = useRouter();
  const isFavorite = track.rating === 1;
  const { activeQueueId } = useAppSelector(useQueueStore);
  const dispatch = useAppDispatch();

  const handlePressAction = (id: string) => {
    match(id)
      .with("add-to-favorites", async () => {
        dispatch(toggleTrackFavorite(track));

        if (activeQueueId?.startsWith("favorites")) {
          await TrackPlayer.add(track);
        }
      })
      .with("remove-from-favorites", async () => {
        dispatch(toggleTrackFavorite(track));

        if (activeQueueId?.startsWith("favorites")) {
          const queue = await TrackPlayer.getQueue();
          const trackToRemove = queue.findIndex(
            (queueTrack) => queueTrack.url === track.url
          );
          await TrackPlayer.remove(trackToRemove);
        }
      })
      .with("add-to-playlist", () => {
        router.push({
          pathname: "(modals)/add-to-playlist",
          params: { trackUrl: track.url },
        });
      })
      .otherwise(() => console.warn(`Unknown menu action ${id}`));
  };

  return (
    <MenuView
      actions={[
        {
          id: isFavorite ? "remove-from-favorites" : "add-to-favorites",
          title: isFavorite ? "Remove from favorites" : "Add to favorites",
          image: isFavorite ? "star.fill" : "star",
        },
        { id: "add-to-playlist", title: "Add to playlist", image: "plus" },
      ]}
      onPressAction={({ nativeEvent }) => handlePressAction(nativeEvent.event)}
    >
      {children}
    </MenuView>
  );
};

export default ShortcutsMenu;
