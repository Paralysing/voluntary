import * as React from 'react';
import {View, ScrollView} from 'react-native'
import { Appbar, Divider, Card, Text } from 'react-native-paper';
import { Image } from 'react-native';
import { useFonts, Prompt_500Medium, Prompt_700Bold} from '@expo-google-fonts/prompt';

const Rewards = () => {
    
    let [fontsLoaded] = useFonts({
        Prompt_500Medium, Prompt_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <View style={{borderWidth: 20, borderColor: 'lavender'}}>
                <Appbar.Header style={{backgroundColor: 'lavender'}}>
                        <Appbar.Content titleStyle ={{fontFamily: 'Prompt_700Bold'}} title="Rewards"/>
                        <Text style={{padding: 5, fontFamily: 'Prompt_500Medium'}}>300</Text>
                        <Image source={require('./assets/kudos_icon.png')} style={{width: 30, height: 30}}/>
                    </Appbar.Header>
                <ScrollView>
                    <Card>
                        <Card.Cover source={{ uri: 'https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png' }} />
                        <Card.Content>
                        <Text style = {{fontFamily: 'Prompt_700Bold'}} variant="titleLarge">Amazon Gift Card</Text>
                        <Text style = {{fontFamily: 'Prompt_500Medium'}}variant="bodyMedium">$15 Gift Card</Text>
                        <View><Text style={{left: 17, fontFamily: 'Prompt_500Medium'}}>10,000</Text>
                        <Image source={require('./assets/kudos_icon.png')} style={{width: 15, height: 15, bottom: 16}}/></View>
                        
                        </Card.Content>
                    </Card>
                    <Divider/>
                    <Card>
                        <Card.Cover source={{ uri: 'https://nypost.com/wp-content/uploads/sites/2/2021/08/lululemon-leggings.jpg?quality=75&strip=all' }} />
                        <Card.Content>
                        <Text style = {{fontFamily: 'Prompt_700Bold'}} variant="titleLarge">Lululemon</Text>
                        <Text style = {{fontFamily: 'Prompt_500Medium'}} variant="bodyMedium">$10 off any purchase</Text>
                        <View><Text style={{left: 17, fontFamily: 'Prompt_500Medium'}}>6,000</Text>
                        <Image source={require('./assets/kudos_icon.png')} style={{width: 15, height: 15, bottom: 16}}/></View>
                        </Card.Content>
                    </Card>
                    <Divider/>
                    <Card>
                        <Card.Cover source={{ uri: 'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/a1488871-8669-47a6-8446-4e83b44296f3.jpg' }} />
                        <Card.Content>
                        <Text style = {{fontFamily: 'Prompt_700Bold'}} variant="titleLarge">Chipotle</Text>
                        <Text style = {{fontFamily: 'Prompt_500Medium'}} variant="bodyMedium">BOGO Burrito Bowl</Text>
                        <View><Text style={{left: 17, fontFamily: 'Prompt_500Medium'}}>2,000</Text>
                        <Image source={require('./assets/kudos_icon.png')} style={{width: 15, height: 15, bottom: 16}}/></View>
                        </Card.Content>
                    </Card>
                    <Divider/>
                    <Card>
                        <Card.Cover source={{ uri: 'https://www.therabody.com/dw/image/v2/BCWX_PRD/on/demandware.static/-/Sites-thg-master/default/dwd8c45c39/images/PDP/grid/PRO_BLACK_GRID_4.jpg?sw=720' }} />
                        <Card.Content>
                        <Text style = {{fontFamily: 'Prompt_700Bold'}} variant="titleLarge">Therabody</Text>
                        <Text style = {{fontFamily: 'Prompt_500Medium'}} variant="bodyMedium">40% off any purchase</Text>
                        <View><Text style={{left: 17, fontFamily: 'Prompt_500Medium'}}>3,000</Text>
                        <Image source={require('./assets/kudos_icon.png')} style={{width: 15, height: 15, bottom: 16}}/></View>
                        </Card.Content>
                    </Card>
                    <View style={{height: 115}}></View>
                </ScrollView>
                
                    
            </View>
            )
}



    
    


export default Rewards;