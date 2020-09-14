import React, { useRef, useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCol,
  MDBView,
  MDBCardImage,
  MDBBtn,
  MDBRow,
} from "mdbreact";
import ContentEditable from "react-contenteditable";
import Pdf from "react-to-pdf";

const CardExample = ({ card, onClick }) => {
  const Occasions = {
    Birthday: {
      icon: "birthday-cake",
      src: "assets/images/birthday.jpg",
      color: "",
    },
    Christmas: {
      icon: "tree",
      src:
        "https://easyfood.ie/wp-content/uploads/2018/12/Fun-facts-Christmas-food.jpg",
      color: "",
    },
    Valentine: {
      icon: "heart",
      src:
        "https://storage.googleapis.com/burbcommunity-aroundambler/2020/01/valentines-day-header-1024x576.jpg",
      color: "",
    },
    Hanukkah: {
      icon: "menorah",
      src:
        "https://media.istockphoto.com/photos/happy-hanukkah-picture-id864602150",
      color: "",
    },
  };

  const [state, setState] = useState("");
  const [targetRef, setTargetRef] = useState(null);
  const contentEditable = useRef();
  const ref = React.createRef();

  useEffect(() => {
    setState(card.text);
    setTargetRef(ref);
  }, [card.text]);

  const handleChange = (evt) => {
    setState(evt.target.value);
  };

  return (
    <MDBCol md="4">
      <MDBRow className="justify-content-end">
        <Pdf
          className="justify-content-center"
          targetRef={targetRef}
          filename="card.pdf"
        >
          {({ toPdf }) => (
            <MDBBtn
              tag="a"
              floating
              gradient="purple"
              color="elegant"
              className="unique mb-3 justify-content-center"
              onClick={toPdf}
            >
              <MDBIcon icon="download" />
            </MDBBtn>
          )}
        </Pdf>
      </MDBRow>
      <div ref={targetRef}>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay="white-slight"
              className="card-img-top"
              src={
                Occasions[card.occasion] ? Occasions[card.occasion].src : "tree"
              }
              alt="food"
            />
          </MDBView>

          <MDBCardBody>
            <h6 className="pink-text text-center">
              <MDBIcon
                size="4x"
                className="text-center"
                icon={
                  Occasions[card.occasion]
                    ? Occasions[card.occasion].icon
                    : "tree"
                }
              />
            </h6>
            {/* <button onClick={onClick}>Edit Message</button> */}

            <MDBCardTitle className="text-center">{card.occasion}</MDBCardTitle>

            <ContentEditable
              innerRef={contentEditable}
              html={state || ""} // innerHTML of the editable div
              disabled={false} // use true to disable editing
              onChange={handleChange} // handle innerHTML change
              tagName="article" // Use a custom HTML tag (uses a div by default)
            />
            <MDBCardText></MDBCardText>

            {/* <ReactToPdf targetRef={ref} filename="card.pdf">
              {({toPdf}) => (
                  <MDBBtn className='unique' onClick={toPdf}>Download</MDBBtn>
              )}
          </ReactToPdf>          */}
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBCol>
  );
};

// CardExample.defaultProps = {
//   card: {
//     occasion: "birthday",
//   },
// };
export default CardExample;
