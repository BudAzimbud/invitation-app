import WeddingImage from "../Asset/Images/wedding-card.jpg";
import BirthdayImage from "../Asset/Images/birthday.jpg";
import EventImage from "../Asset/Images/event.jpg";
import OtherImage from "../Asset/Images/other.jpg";

export const LIST_PARTY = 'LIST_PARTY'

export const listParty = (data) => {
    return dispatch => {

        dispatch({
            type: LIST_PARTY,
            payload: {
                data: [
                    {
                        title: "Pernikahan",
                        image: WeddingImage,

                    },
                    {
                        title: "Ulang Tahun",
                        image: BirthdayImage,

                    },
                    {
                        title: "Event",
                        image: EventImage,

                    },
                    {
                        title: "Lainnya",
                        image: OtherImage,
                    },
                ],
                errorMessage: false,
            }
        })

    }
}
