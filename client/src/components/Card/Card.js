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
      src: "assets/images/christmas1.jpg",
      color: "",
    },
    Valentine: {
      icon: "heart",
      src: "assets/images/vday.jpg",
      color: "",
    },
    Hanukkah: {
      icon: "menorah",
      src: "assets/images/hanukkah.jpg",
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
      <Pdf targetRef={targetRef} filename="card.pdf">
        {({ toPdf }) => (
          <MDBBtn className="unique" onClick={toPdf}>
            Download
          </MDBBtn>
        )}
      </Pdf>
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
              alt="heart"
            />
          </MDBView>

          <MDBCardBody>
            <h6 className="pink-text">
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

            <MDBCardTitle>{card.occasion}</MDBCardTitle>

            <ContentEditable
              innerRef={contentEditable}
              html={state || ""} // innerHTML of the editable div
              disabled={false} // use true to disable editing
              onChange={handleChange} // handle innerHTML change
              tagName="article" // Use a custom HTML tag (uses a div by default)
            />
            {/* <MDBCardText></MDBCardText> */}

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
