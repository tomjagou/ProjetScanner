import React from 'react';
import JsonData from './services/base_materiels.json';

class PageInfos extends Component {

    const Tableau = JsonData.map(info => {
        return (
        <tr>
            <td>{info.type}</td>
            <td>{info.dpt}</td>
            <td>{info.entite}</td>
            <td>{info.nom_matos}</td>
            <td>{info.marque}</td>
            <td>{info.modele}</td>
            <td>{info.num_serie}</td>
            <td>{info.date_gtie}</td>
        </tr>
        );
    });
    
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
            <tbody>{Tableau}</tbody>
            </table>
        </div>
        );
    }
}     

export default PageInfos;


