import { Playlist } from "@/models";
import { FC } from "react";
import { FlatList, FlatListProps } from "react-native";
import EmptyContent from "../empty-content";
import PlaylistItem from "./playlist-item";
import ItemSeparatorComponent from "./seperator";

type Props = {
  playlist: Playlist[];
  onPressPlaylist: (playlist: Playlist) => void;
} & Partial<FlatListProps<Playlist>>;

const PlaylistList: FC<Props> = ({
  playlist,
  onPressPlaylist,
  ...flatListProps
}) => {
  return (
    <FlatList
      data={playlist}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ListFooterComponent={ItemSeparatorComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={
        <EmptyContent message="No playlist found" isTrackList />
      }
      renderItem={({ item }) => (
        <PlaylistItem playlist={item} onPress={() => onPressPlaylist(item)} />
      )}
      {...flatListProps}
    />
  );
};

export default PlaylistList;
