import { Box, List, Text } from '@chakra-ui/react';

const AboutUs = () => {
    return (
        <Box mt={[8, 8, 0]} textAlign={['justify', 'left', 'left']}>
            <Text as="h1" fontSize="2xl" mb={5}>
                About us
            </Text>
            <Text pb="2">
                Discover the Magic of TonieTales: Your Gateway to Personalized
                Storytelling!
            </Text>
            <Text pb="2">
                At TonieTales, we believe every child deserves a story that
                speaks to their heart and sparks their imagination. That’s why
                we’ve created this innovative platform to empower parents,
                guardians, and storytellers like you to craft unique, engaging
                tales for the little ones in your life.
            </Text>
            <Text pb="2">Our project stems from three core aspirations:</Text>
            <List.Root>
                <List.Item pb="4">
                    Diverse Characters, Endless Possibilities: We’re passionate
                    about helping you create Tonie stories featuring a wide
                    array of characters. This diversity not only entertains but
                    also helps children explore different themes, fostering
                    empathy, understanding, and personal growth.
                </List.Item>
                <List.Item pb="4">
                    AI-Powered Creativity at Your Fingertips: We’ve harnessed
                    the power of artificial intelligence to make storytelling a
                    breeze. With just a few clicks, you can generate fresh,
                    exciting stories that captivate young minds. It’s never been
                    easier to keep your little ones engaged with new adventures!
                </List.Item>
                <List.Item pb="4">
                    Personal Touch in Every Tale: We understand the special bond
                    between you and your child. That’s why we’ve made it simple
                    for parents to weave themselves and their children into the
                    fabric of each story. Imagine your child’s delight at
                    hearing familiar names and experiences in their bedtime
                    tales!
                </List.Item>
            </List.Root>
            <Text>
                Join us on this magical journey of storytelling. With
                TonieTales, you’re not just creating stories – you’re crafting
                memories, nurturing imagination, and strengthening bonds. Let’s
                make every story time an unforgettable experience!
            </Text>
        </Box>
    );
};

export default AboutUs;