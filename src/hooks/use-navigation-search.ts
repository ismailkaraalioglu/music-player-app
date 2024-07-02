import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { SearchBarProps } from "react-native-screens";

const defaultSearchOptions: SearchBarProps = {
  tintColor: "#2a89d8",
  hideWhenScrolling: false,
};

type Props = {
  searchBarOptions?: SearchBarProps;
};

const useNavigationSearch = ({ searchBarOptions }: Props) => {
  const [search, setSearch] = useState<string>("");
  const navigation = useNavigation();

  const handleOnChangeText: SearchBarProps["onChangeText"] = ({
    nativeEvent: { text },
  }) => {
    setSearch(text);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ...defaultSearchOptions,
        ...searchBarOptions,
        onChangeText: handleOnChangeText,
      },
    });
  }, [navigation, searchBarOptions]);

  return search;
};

export default useNavigationSearch;
