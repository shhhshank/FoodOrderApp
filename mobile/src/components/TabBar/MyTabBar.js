import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../../constants/Colors';
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabContainer, { backgroundColor: isFocused ? Colors.PRIMARY : 'transparent' }]}
          >
            <Ionicons name={options.tabBarIcon} size={27} color={isFocused ? Colors.LIGHT : Colors.DARK} />
            {isFocused && <Text style={styles.labelText}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 999,
    flexDirection: "row"
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 11,
    paddingVertical: 6,
    backgroundColor: '#ffffff',
    justifyContent: "space-evenly"
  },
  labelText: {
    marginStart: 4,
    color: Colors.LIGHT
  }
})

export default MyTabBar