
import {React, Component} from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style =	{
		{alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' }
	}  >
        <Text 
            style = {
				{
					color: '#9133f5', fontSize: 30, marginBottom: 20, fontWeight: 'bold'
				}
			}
			>Carros espetaculares
		</Text>
		
		 {/************* Lamborghini************* */}
        <Text
			style = 
			{
				{
					color: '#11acf5', fontSize: 20, marginVertical: 10, fontWeight: 'bold'
				}
			}
			>Nome da marca: Lamborghini
		</Text>
        <Text
			style = 
			{
				{
					backgroundColor: '#fff',
					borderWidth: 2,
					borderColor: '#ddd',
					borderRadius: 10,
					padding: 5,
					elevation: 10,
					marginBottom: 20
				}
			}
			>Nome do modelo: Aventador
		</Text>

		<Image
            source = 
			{
				{
					uri: 'https://cdn.suwalls.com/wallpapers/cars/2013-lamborghini-aventador-lp900-sv-spezial-version-28792-1920x1200.jpg'
				}
				
			}			
            style={{width: 300, height: 200, borderRadius: 10 }}						
        />

		
		{/************* Ferrari ************* */}
        <Text
			style = 
			{
				{
					color: '#11acf5', fontSize: 20, marginVertical: 10, fontWeight: 'bold' 
				}
			}
			>Nome da marca: Ferrari
		</Text>
        <Text
			style =
			{
				{
					backgroundColor: '#fff',
					borderWidth: 2,
					borderColor: '#ddd',
					borderRadius: 10,
					padding: 5,
					elevation: 10,
					marginBottom: 20
				}
			}
		
			>Nome do modelo: SF90
		</Text>
		 <Image
          source = 
		  {
			{
            uri: 'https://i.pinimg.com/originals/1f/1d/37/1f1d37f8189848903e8c838017b4bcb7.jpg'
          	}
		}			
          style={{ width: 300, height: 200,  borderRadius: 15, borderRadius: 10 }}						
        />
          </View>
      );
    }
}
export default App;