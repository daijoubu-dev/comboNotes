import { MdDeleteForever } from "react-icons/md";
import icon_kick from "../images/icon_kick.png";
import icon_kick_h from "../images/icon_kick_h.png";
import icon_kick_l from "../images/icon_kick_l.png";
import icon_kick_m from "../images/icon_kick_m.png";
import icon_punch from "../images/icon_punch.png";
import icon_punch_h from "../images/icon_punch_h.png";
import icon_punch_l from "../images/icon_punch_l.png";
import icon_punch_m from "../images/icon_punch_m.png";
import key_circle from "../images/key-circle.png";
import key_d from "../images/key-d.png";
import key_dc from "../images/key-dc.png";
import key_dl from "../images/key-dl.png";
import key_dr from "../images/key-dr.png";
import key_l from "../images/key-l.png";
import key_lc from "../images/key-lc.png";
import key_nutral from "../images/key-nutral.png";
import key_r from "../images/key-r.png";
import key_u from "../images/key-u.png";
import key_ul from "../images/key-ul.png";
import key_ur from "../images/key-ur.png";
import icon_s1 from "../images/s1.png";
import icon_s2 from "../images/s2.png";
import icon_s3 from "../images/s3.png";

const characterMappings = {
    "1": <img src={key_dl} alt="1" className="inputIcon"/>,
    "2": <img src={key_d} alt="2" className="inputIcon"/>,
    "3": <img src={key_dr} alt="3" className="inputIcon"/>,
    "4": <img src={key_l} alt="4" className="inputIcon"/>,
    "5": <img src={key_nutral} alt="5" className="inputIcon"/>,
    "6": <img src={key_r} alt="6" className="inputIcon"/>,
    "7": <img src={key_ul} alt="7" className="inputIcon"/>,
    "8": <img src={key_u} alt="8" className="inputIcon"/>,
    "9": <img src={key_ur} alt="9" className="inputIcon"/>,
    "B": <img src={key_l} alt="4" className="inputIcon"/>,
    "N": <img src={key_nutral} alt="5" className="inputIcon"/>,
    "F": <img src={key_r} alt="6" className="inputIcon"/>,
    "J": <img src={key_u} alt="7" className="inputIcon"/>,
    "C": <img src={key_d} alt="8" className="inputIcon"/>,
    "D": <img src={key_d} alt="9" className="inputIcon"/>,
    "U": <img src={key_u} alt="7" className="inputIcon"/>,

    "LP": <img src={icon_punch_l} alt="4" className="inputIcon"/>,
    "MP": <img src={icon_punch_m} alt="5" className="inputIcon"/>,
    "HP": <img src={icon_punch_h} alt="6" className="inputIcon"/>,
    "LK": <img src={icon_kick_l} alt="7" className="inputIcon"/>,
    "MK": <img src={icon_kick_m} alt="8" className="inputIcon"/>,
    "HK": <img src={icon_kick_h} alt="9" className="inputIcon"/>,
    "P": <img src={icon_punch} alt="8" className="inputIcon"/>,
    "K": <img src={icon_kick} alt="9" className="inputIcon"/>,

    //FIND ICONS
    "LVL 1": <img src={icon_s1} alt="LVL 1" className="inputIcon"/>,
    "LVL 2": <img src={icon_s2} alt="LVL 2" className="inputIcon"/>,
    "LVL 3": <img src={icon_s3} alt="LVL 3" className="inputIcon"/>,

    "QCF": [<img src={key_d} alt="2" className="inputIcon"/>,
            <img src={key_dr} alt="3" className="inputIcon"/>,
            <img src={key_r} alt="6" className="inputIcon"/>
    ],
    "QCB": [<img src={key_d} alt="2" className="inputIcon"/>,
            <img src={key_dl} alt="1" className="inputIcon"/>,
            <img src={key_l} alt="4" className="inputIcon"/>
    ],
    "HCF": [<img src={key_l} alt="4" className="inputIcon"/>,
            <img src={key_dl} alt="1" className="inputIcon"/>,
            <img src={key_d} alt="2" className="inputIcon"/>,
            <img src={key_dr} alt="3" className="inputIcon"/>,
            <img src={key_r} alt="6" className="inputIcon"/>
    ],
    "HCB": [<img src={key_r} alt="6" className="inputIcon"/>,
            <img src={key_dr} alt="3" className="inputIcon"/>,
            <img src={key_d} alt="2" className="inputIcon"/>,
            <img src={key_dl} alt="1" className="inputIcon"/>,
            <img src={key_l} alt="4" className="inputIcon"/>
    ],
    "DI": [ <img src={icon_punch_h} alt="6" className="inputIcon"/>,
            <img src={icon_kick_h} alt="9" className="inputIcon"/>
    ],
    "DP": [ <img src={key_r} alt="6" className="inputIcon"/>,
            <img src={key_d} alt="2" className="inputIcon"/>,
            <img src={key_dr} alt="3" className="inputIcon"/>,
    ]
    
    // Add more mappings as needed for other characters or combinations
  };

const getCharacterElement = (characters, index) => {
    let element = null;
    let consumedCharacters = 0;

    // Check for combinations first, then single characters
    for (let length = characters.length; length > 0; length--) {
      const substring = characters.slice(0, length);
      if (characterMappings.hasOwnProperty(substring)) {
        element = characterMappings[substring];
        consumedCharacters = length - 1; // Subtract 1 to skip remaining characters in the combination
        break;
      }
    }

    // If no match found, default to the individual characters
    if (!element) {
      const character = characters[0];
      element = characterMappings[character] || <span className="inputIcon" key={index}>{character}</span>;
    }

    return { element, consumedCharacters };
};

const renderElements = (text) => {
    const elements = [];
    let index = 0;

    while (index < text.length) {
      const remainingString = text.slice(index);
      const { element, consumedCharacters } = getCharacterElement(
        remainingString,
        index
      );

      elements.push(element);
      index += consumedCharacters + 1; // Add 1 to include the current character
    }

    return elements;
  };

const Note = ({ id, header, delimiter, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <div className="note-header">
        <h2>{header}</h2>
      </div>
      <div>{renderElements(text)}</div>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
