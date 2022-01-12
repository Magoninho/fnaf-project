/**
     * Creates a pop up with a message
     * @param message
     */
export default function popup(message) {
    var styles = `
		/* The Modal (background) */
		.modal {
		  display: none; /* Hidden by default */
		  position: fixed; /* Stay in place */
		  z-index: 1; /* Sit on top */
		  padding-top: 100px; /* Location of the box */
		  left: 0;
		  top: 0;
		  width: 100%; /* Full width */
		  height: 100%; /* Full height */
		  overflow: auto; /* Enable scroll if needed */
		  background-color: rgb(0,0,0); /* Fallback color */
		  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
		}
		
		/* Modal Content */
		.modal-content {
		  background-color: #fefefe;
		  margin: auto;
		  padding: 20px;
		  border: 1px solid #888;
		  width: 40%;
		}
		
		/* The Close Button */
		.close {
		  color: #aaaaaa;
		  float: right;
		  font-size: 28px;
		  font-weight: bold;
		}
		
		.close:hover,
		.close:focus {
		  color: #000;
		  text-decoration: none;
		  cursor: pointer;
		}
		`;
    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    let modal = document.createElement("div");
    modal.classList.add("modal");
    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modal.appendChild(modalContent);
    let closeSpan = document.createElement("span");
    closeSpan.classList.add("close");
    closeSpan.innerHTML = "&times;";
    modalContent.appendChild(closeSpan);
    let p = document.createElement("p");
    p.style.color = "black";
    p.innerHTML = message;
    modalContent.appendChild(p);
    modal.style.display = "block";
    modal.style.textAlign = "center";
    closeSpan.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    document.body.appendChild(modal);
}
//# sourceMappingURL=Utils.js.map