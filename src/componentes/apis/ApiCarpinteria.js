

import discoCorte from '../../assets/DiscoCorte.jpg'
import pintura from '../../assets/pintureria.jpg'

const ApiCarpinteria=()=>{
    const data=[
        {
            'name':'Disco de corte',
            'precio':3200,
            'imagen':{discoCorte},
            'descripcion':'aswdpfoiahfgpauehrgaperg'
        },
        {'name':'Lija',
        'precio':150,
        'imagen':{pintura},
        'descripcion':'aswdpfoiahfgpauehrgaperg'
    }
    ];
    return(
        <>{
           JSON.stringify(data)
    }</>)
}
export default ApiCarpinteria;