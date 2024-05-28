import React from 'react';
import { View, Text } from 'react-native';

const Details = () => {
  return (
    <View className="w-full bg-white shadow-{10 10 10 10}  flex items-start justify-between p-8">
      <Text className="text-lg m-1 truncate">
        First Floor Apartment in Jor Bagh
      </Text>
      <Text className="text-[10px] font-light m-1">
        This exquisite first-floor apartment is perched on a 515 sqm (617 sq.
        yds.) plot; the largest plot size of its kind in Jor Bagh, outside the
        ASI’s limitations and in close proximity to Lodhi Gardens. The apartment
        faces and has access to a park in the front and the rear providing
        residents with verdant & serene green views.
      </Text>
      <Text
        className="text-[10px] font-light m-1 truncate"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        This recently built 275 sqm (~2,960 sq. ft.) apartment has a beautiful
        living room with.
      </Text>
    </View>
  );
};

export default Details;
