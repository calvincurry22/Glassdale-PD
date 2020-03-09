import { getOfficers } from './officers/OfficerProvider.js'
import { useOfficers } from './officers/OfficerProvider.js'
import { getCriminals } from './criminals/CriminalDataProvider.js'
import CriminalList from './criminals/CriminalList.js'
import ConvictionSelect from './convictions/ConvictionSelect.js'
import { getConvictions } from './convictions/ConvictionProvider.js'


getCriminals()
.then(response => CriminalList()
    )

getConvictions()
    .then(response => ConvictionSelect()
    )
    
