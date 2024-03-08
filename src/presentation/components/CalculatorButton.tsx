import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  width?: number;
  blackText?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = colors.darkGray,
  width = 80,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.button,
        width: width,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
      })}
      onPress={() => onPress()}>
      <Text
        style={{...styles.buttonText, color: blackText ? 'black' : 'white'}}>
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
