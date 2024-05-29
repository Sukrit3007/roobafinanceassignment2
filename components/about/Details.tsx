import React from 'react';
import { View, Text } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

const Details = () => {
  return (
    <ThemedView className="w-full shadow-lg flex items-start justify-between p-8">
      <ThemedText className="text-lg m-1 truncate">
        First Floor Apartment in Jor Bagh
      </ThemedText>
      <ThemedText className="text-[10px] font-light m-1">
        This exquisite first-floor apartment is perched on a 515 sqm (617 sq.
        yds.) plot; the largest plot size of its kind in Jor Bagh, outside the
        ASI’s limitations and in close proximity to Lodhi Gardens. The apartment
        faces and has access to a park in the front and the rear providing
        residents with verdant & serene green views.
      </ThemedText>
      <ThemedText
        className="text-[10px] font-light m-1 truncate"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        This recently built 275 sqm (~2,960 sq. ft.) apartment has a beautiful
        living room with.
      </ThemedText>
    </ThemedView>
  );
};

export default Details;
