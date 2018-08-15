var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './icon';
import cn from './utilities/classnames';
import { modalWillReceiveProps } from './utilities/modals';
import Styles from './styles/fullscreen-modal.module.scss';
export class FullscreenModal extends Component {
    componentWillReceiveProps(nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    }
    render() {
        const _a = this.props, { modalContainer, isOpen, bodyNode, onClose, className, children, title } = _a, attributes = __rest(_a, ["modalContainer", "isOpen", "bodyNode", "onClose", "className", "children", "title"]);
        return ReactDOM.createPortal(React.createElement("div", Object.assign({ className: cn('modal-fullscreen', Styles['modal-fullscreen'], { [Styles['is-open']]: isOpen }, className) }, attributes),
            React.createElement("header", { className: "modal-fullscreen-header" },
                React.createElement("a", { className: "modal-close", onClick: onClose },
                    React.createElement(Icon, { type: "x" })),
                React.createElement("h2", null, title)),
            React.createElement("div", { className: "modal-content has-padding" },
                React.createElement("div", { className: "row" }, children))), modalContainer);
    }
}
FullscreenModal.defaultProps = {
    bodyNode: document.body,
    modalContainer: document.body,
    onClose: () => { },
};
export default FullscreenModal;
//# sourceMappingURL=full-screen-modal.js.map