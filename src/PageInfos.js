import React from 'react';
import JsonData from './services/base_materiels.json';
import _ from 'lodash';

class PageInfos extends Component {
  constructor(props) {
    this.props = props;
  }

  data_materiels = JSON.parse(JsonData);

  selected_materiel = _.find(this.data_materiels, {id: props.id});

  render() {
    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Type</th>
              <th>Departement</th>
              <th>Entite</th>
              <th>Nom</th>
              <th>Marque</th>
              <th>Modele</th>
              <th>Numéro de série</th>
              <th>Date de garantie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.selected_materiel.type}</td>
              <td>{this.selected_materiel.dpt}</td>
              <td>{this.selected_materiel.entite}</td>
              <td>{this.selected_materiel.nom_matos}</td>
              <td>{this.selected_materiel.marque}</td>
              <td>{this.selected_materiel.modele}</td>
              <td>{this.selected_materiel.num_serie}</td>
              <td>{this.selected_materiel.date_gtie}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PageInfos;
