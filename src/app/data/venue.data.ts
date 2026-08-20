import { Venue } from "../types/venue.interface"

/*export class Data {
    
    firstVenue: Venue = {
        name: "Coopérative de mai",
        type: "Salle de Concert",
        capacity: 1000,
        location: "Clermont-Ferrand",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO0MP7JQgnVqb074Ps2rpJ_p6miOJECk1qzJ8Gk4JGA&s=10"
    }

    secondVenue: Venue = {
        name: "Transbordeur",
        type: "Salle de Concert",
        capacity: 1000,
        location: "Lyon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_Wf26a1Q313DOQnRQEwKq1q4yNwod-ayND_CL5hPIg&s=10"
    }

    arrayOfVenues: Venue[] = [
        this.firstVenue,
        this.secondVenue
    ]
}*/

export const data: Venue[] = [
    {
        name: "Coopérative de mai",
        type: "Salle de Concert",
        capacity: 500,
        location: "Clermont-Ferrand",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO0MP7JQgnVqb074Ps2rpJ_p6miOJECk1qzJ8Gk4JGA&s=10"
    },
    {
       name: "Transbordeur",
        type: "Salle de Concert",
        capacity: 500,
        location: "Lyon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_Wf26a1Q313DOQnRQEwKq1q4yNwod-ayND_CL5hPIg&s=10" 
    },
    {
        name: "Le Fil",
        type: "Salle de Concert",
        capacity: 500,
        location: "Saint-Etienne",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTluNIbPmNWniRTAEikAwfFSk5EqSI0P7eRbNU-DFqg&s=10"
    }
]