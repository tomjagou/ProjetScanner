import React from 'react';
import JsonData from './services/base_materiels.json';

class PageInfos extends Component {

    data_materiels = JSON.parse(JsonData)
    
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
            <tbody>{
                data_materiels.map(({type, dpt, entite, nom_matos, marque, modele, num_serie, date_gtie}) => {
                    return (
                        <tr>
                            <td>{type}</td>
                            <td>{dpt}</td>
                            <td>{entite}</td>
                            <td>{nom_matos}</td>
                            <td>{marque}</td>
                            <td>{modele}</td>
                            <td>{num_serie}</td>
                            <td>{date_gtie}</td>
                        </tr>
                    )
                })
                }</tbody>
            </table>
        </div>
        );
    }
}     

export default PageInfos;


