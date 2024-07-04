import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { setActiveQueueId, useQueueStore } from "@/stores/queue-slice";
import { FC, useRef } from "react";
import { FlatList, FlatListProps } from "react-native";
import TrackPlayer, { Track } from "react-native-track-player";
import QueueControls from "../queue-controls";
import ItemDivider from "./divider";
import EmptyContent from "./empty-content";
import TrackItem from "./track-item";

export type TrackListProps = Partial<FlatListProps<Track>> & {
  id: string;
  tracks: Track[];
  hideQueueControls?: boolean;
};

const TrackList: FC<TrackListProps> = ({
  id,
  tracks,
  hideQueueControls,
  ...props
}) => {
  const queueOffset = useRef(0);
  const { activeQueueId } = useAppSelector(useQueueStore);
  const dispatch = useAppDispatch();

  const handleSelectTrack = async (selectedTrack: Track) => {
    const trackIndex = tracks.findIndex(
      (track) => track.url === selectedTrack.url
    );

    if (trackIndex === -1) return;

    const isChangingQueue = id !== activeQueueId;

    if (isChangingQueue) {
      const beforeTracks = tracks.slice(0, trackIndex);
      const afterTracks = tracks.slice(trackIndex + 1);

      await TrackPlayer.reset();

      await TrackPlayer.add(selectedTrack);
      await TrackPlayer.add(afterTracks);
      await TrackPlayer.add(beforeTracks);

      await TrackPlayer.play();

      queueOffset.current = trackIndex;
      dispatch(setActiveQueueId(id));
    } else {
      const nextTrackIndex =
        trackIndex - queueOffset.current < 0
          ? tracks.length + trackIndex - queueOffset.current
          : trackIndex - queueOffset.current;

      await TrackPlayer.skip(nextTrackIndex);
      TrackPlayer.play();
    }
  };

  const ListHeaderComponent = () =>
    !hideQueueControls ? <QueueControls tracks={tracks} /> : undefined;

  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      ListEmptyComponent={EmptyContent}
      renderItem={({ item: track }) => (
        <TrackItem track={track} onSelectTrack={handleSelectTrack} />
      )}
      {...props}
    />
  );
};

export default TrackList;
