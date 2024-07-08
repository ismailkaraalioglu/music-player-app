import PlaylistList from "@/components/playlist-list";
import { usePlaylist } from "@/hooks/use-playlist";
import { Playlist } from "@/models";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { useQueueStore } from "@/stores/queue-slice";
import { addToPlaylist, useTracksStore } from "@/stores/tracks-slice";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import TrackPlayer, { Track } from "react-native-track-player";

const AddToPlaylistModal = () => {
  const router = useRouter();
  const { trackUrl } = useLocalSearchParams<{ trackUrl: Track["url"] }>();
  const { tracks } = useAppSelector(useTracksStore);
  const { activeQueueId } = useAppSelector(useQueueStore);
  const { playlist } = usePlaylist();
  const dispatch = useAppDispatch();

  const track = tracks.find((currentTrack) => trackUrl === currentTrack.url);

  if (!track) {
    return null;
  }

  const availablePlaylists = playlist.filter((playlist) =>
    playlist.tracks.some((playlistTrack) => playlistTrack.url === track.url)
  );

  const handlePlaylistPress = async (playlist: Playlist) => {
    dispatch(addToPlaylist({ track, playlistName: playlist.name }));

    router.dismiss();

    if (activeQueueId?.startsWith(playlist.name)) {
      await TrackPlayer.add(track);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 24,
      }}
    >
      <PlaylistList
        playlist={availablePlaylists}
        onPressPlaylist={handlePlaylistPress}
      />
    </SafeAreaView>
  );
};

export default AddToPlaylistModal;
