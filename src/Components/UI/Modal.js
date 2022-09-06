import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => <div onClick = {() => props.clsModal(false)} className = {classes.backdrop}></div>

const OverLay = (props) => {
	return <div className = {classes.modal}>
		<div className = {classes.content}>{props.children}</div>
	</div>
}

const PortalElement = document.getElementById("overlays");

const Modal = (props) => {

	return(<>
		{ReactDOM.createPortal(<Backdrop clsModal = {(data) => props.closeModal(data)}/> , PortalElement)}
		{ReactDOM.createPortal(<OverLay>{props.children}</OverLay> , PortalElement)}
	</>
		)

}

export default Modal;