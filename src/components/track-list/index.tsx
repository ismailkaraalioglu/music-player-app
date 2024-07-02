import { FC } from "react";
import { FlatList, FlatListProps } from "react-native";
import TrackPlayer, { Track } from "react-native-track-player";
import ItemDivider from "./divider";
import EmptyContent from "./empty-content";
import TrackItem from "./track-item";

export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const TrackList: FC<TrackListProps> = ({ tracks, ...props }) => {
  const handleSelectTrack = async (track: Track) => {
    await TrackPlayer.load(track);
    await TrackPlayer.play();
  };

  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
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
