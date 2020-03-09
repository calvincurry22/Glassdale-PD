import { getOfficers } from './officers/OfficerProvider.js'
import { useOfficers } from './officers/OfficerProvider.js'
import { getCriminals } from './criminals/CriminalDataProvider.js'
import CriminalList from './criminals/CriminalList.js'


getCriminals()
.then(response => CriminalList()
    )

    
