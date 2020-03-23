import { getCriminals } from "./criminals/CriminalDataProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import NoteForm from "./notes/NoteForm.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import "./notes/NoteList.js"

import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import "./criminals/AssociateDialog.js"
import OfficerSelect from "./officers/OfficerSelect.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import { NoteList } from "./notes/NoteList.js"
import { getNotes } from "./notes/NoteDataProvider.js"


getOfficers().then(OfficerSelect)
getCriminals().then(CriminalList)

// first get all convictions, THEN create the conviction dropdown
getConvictions().then(ConvictionSelect)

DisplayNotesButton()
DisplayNoteFormButton()
NoteForm()
