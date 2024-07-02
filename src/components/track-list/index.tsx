import { FC } from "react";
import { FlatList, FlatListProps, StyleSheet, View } from "react-native";
import TrackPlayer, { Track } from "react-native-track-player";
import TrackItem from "./track-item";

export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const ItemDivider = () => (
  <View
    className="my-2 ml-16 opacity-30 border-[#9ca3af]"
    style={{ borderWidth: StyleSheet.hairlineWidth }}
  />
);

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
      renderItem={({ item: track }) => (
        <TrackItem track={track} onSelectTrack={handleSelectTrack} />
      )}
      {...props}
    />
  );
};

export default TrackList;
