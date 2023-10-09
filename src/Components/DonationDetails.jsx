import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ErrorPage from "./ErrorPage";

const DonationDetails = () => {
  const { id: ID } = useParams();
  const donates = useLoaderData();
  const donate = donates.find((item) => item.id == ID);
  const {
    id,
    picture,
    title,
    text_button_bg,
    price,
    description,
  } = donate;

  const handleAdd = () => {
    const myDonationArray = JSON.parse(localStorage.getItem("myDonation")) || [];

    const findData = myDonationArray.find((item) => item.id === id);

    if (findData) {
      toast.error("Donation Exist!");
    } else {
      myDonationArray.push(donate);
      localStorage.setItem("myDonation", JSON.stringify(myDonationArray));
      toast.success("Donation successfully added!");
    }
  };

  if (donate) {
    return (
      <div className="content-box mx-auto mt-10 relative">
        <div className="mb-10 relative">
          <img src={picture} alt={title} className="w-full min-h-screen" />
          <div className="absolute bottom-0 w-full p-10 bg-opacity-60 bg-stone-600">
            <button
              onClick={handleAdd}
              style={{
                backgroundColor: text_button_bg,
                outline: "none",
                border: "none",
              }}
              className="btn text-white font-bold"
            >
              Donate {price.slice(0, -3)}
            </button>
          </div>
        </div>

        <div className="container mt-10">
          <h2 className="font-bold text-5xl mb-10">{title}</h2>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  } else {
    return <ErrorPage></ErrorPage>;
  }
};

export default DonationDetails;
