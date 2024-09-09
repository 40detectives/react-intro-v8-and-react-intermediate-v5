import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { adopt } from "./adoptedPetSlice";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { useGetPetQuery } from "./petApiService";
import Modal from "./Modal";

const Details = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, isError, data: pet } = useGetPetQuery(id);

  if (isError) {
    return (
      <div className="loading-pane">
        <h2 className="loader">💀</h2>
        <h2>Oh no! Something went wrong</h2>
        <h2 className="loader">💀</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐣</h2>
      </div>
    );
  }

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} – {pet.breed} – {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    dispatch(adopt(pet));
                    navigate("/"); // this changes the location programatically to the root route
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  // for more info take a look at:
  // https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
export default DetailsErrorBoundary;
