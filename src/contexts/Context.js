import {mapValuesSeries} from 'async';
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import * as RNFS from 'react-native-fs';

export class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      matosType: null,
      departement: null,
      matosEntite: null,
      nom: null,
      matosMarque: null,
      matosModele: null,
      numero: null,
      garantie: null,
    };
  }

  readFile = () => {
    RNFS.readFile('../services/base_materiels.json', 'ascii')
      .then(res => {
        console.log(res);
        const d = JSON.parse(res);
        this.setState({
          content: res,
          matosType: d.type,
          departement: d.dpt,
          matosEntite: d.entite,
          nom: d.nom_matos,
          matosMarque: d.marque,
          matosModele: d.modele,
          numero: d.num_serie,
          garanti: d.date_gtie,
        });
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{marginVertical: '15%'}}>
          <Button title="Voir le matériel" onPress={() => this.readFile()} />
        </View>
        <Text> {this.state.content} </Text>
        <Text
          style={{
            marginVertical: '5%',
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          NOM ={' '}
          {this.state.nom === null
            ? 'Cliquer pour connaître le matériel'
            : this.state.nom}
        </Text>
      </View>
    );
  }
}

export default Context;
