import { ImageSourcePropType, View, Dimensions } from "react-native";
import { Image } from "expo-image";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type Props = {
    imageSize: number;
    stickerSource: string;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    // Obtenemos las dimensiones de la pantalla para calcular el límite del 40%
    const { width, height } = Dimensions.get('window');
    const maxSize = Math.min(width, height) * 0.4;
    
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scaleImage = useSharedValue(imageSize);
    const initialSize = useSharedValue(imageSize);

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== initialSize.value * 2) {
                // Aseguramos que no exceda el límite máximo
                const newSize = scaleImage.value * 2;
                scaleImage.value = Math.min(newSize, maxSize);
            } else {
                scaleImage.value = initialSize.value;
            }
        });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    const drag = Gesture.Pan()
        .onChange((event) => {
            translateX.value += event.changeX;
            translateY.value += event.changeY;
        });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    const pinch = Gesture.Pinch()
        .onUpdate((event) => {
            // Calculamos el nuevo tamaño según el pinch
            const newSize = initialSize.value * event.scale;
            // Limitamos al tamaño máximo (40% del view)
            scaleImage.value = Math.min(newSize, maxSize);
        })
        .onEnd(() => {
            // Guardamos el tamaño final como nuevo tamaño inicial para futuros gestos
            // Esto permite que el doble tap siga funcionando correctamente
            initialSize.value = scaleImage.value;
        });

    const composedGestures = Gesture.Simultaneous(drag, pinch, doubleTap);

    return (
        <GestureDetector gesture={composedGestures}>
            <Animated.View style={[containerStyle, { top: -350 }]}>
                {/* <GestureDetector gesture={doubleTap}> */}
                    <Animated.Image
                        source={stickerSource as ImageSourcePropType}
                        resizeMode={"contain"}
                        style={[imageStyle, {
                            width: imageSize,
                            height: imageSize,
                        }]}
                    />
                {/* </GestureDetector> */}
            </Animated.View>
        </GestureDetector>
    );
}