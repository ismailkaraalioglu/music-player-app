import { Track } from "@/models";
import { FC } from "react";
import { FlatList, FlatListProps, StyleSheet, View } from "react-native";
import TrackListItem from "./track-list-item";

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
  return (
    <FlatList
      data={tracks}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem track={{ ...track, image: track.artwork }} />
      )}
      {...props}
    />
  );
};

export default TrackList;
