var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import cn from './utilities/classnames';
import Icon from './icon';
import React, { Component } from 'react';
import Styles from './styles/text-area.module.scss';
import Tooltip from './tooltip';
export class TextArea extends Component {
    constructor() {
        super(...arguments);
        this.state = { focused: false };
        this.setFocused = () => this.setState({ focused: true });
        this.setBlurred = () => this.setState({ focused: false });
    }
    get height() {
        const { maxHeight } = this.props;
        if (!this.textarea) {
            return '25px';
        }
        // This is a terrible, yet necessary, idea.
        this.textarea.style.height = '';
        return `${Math.min(this.textarea.scrollHeight, maxHeight)}px`;
    }
    render() {
        const _a = this.props, { children, disabled, error, id, info, label, onChange: handleChange, required, scrollable, value, tooltip, tooltipDirection } = _a, attributes = __rest(_a, ["children", "disabled", "error", "id", "info", "label", "onChange", "required", "scrollable", "value", "tooltip", "tooltipDirection"]);
        const { focused } = this.state;
        const hasValue = !!value;
        return (React.createElement("div", { className: cn(Styles['textarea-wrap'], {
                [Styles['has-value']]: hasValue,
                [Styles['is-disabled']]: disabled,
                [Styles['is-error']]: error,
                [Styles['is-required']]: required,
                [Styles['is-scrollable']]: scrollable,
                [Styles['is-focused']]: focused,
            }) },
            React.createElement("label", { className: cn(Styles['textarea-label']), htmlFor: id }, label),
            React.createElement("textarea", Object.assign({ id: id, value: value, onChange: handleChange, onFocus: this.setFocused, onBlur: this.setBlurred, disabled: disabled, style: { height: this.height }, ref: textarea => (this.textarea = textarea) }, attributes)),
            info && (React.createElement("span", { className: cn(Styles['textarea-info'], {
                    [Styles['is-error']]: error,
                }), id: `${id}-info` }, info)),
            children,
            tooltip && (React.createElement("div", { className: Styles['textarea-tooltip'] },
                React.createElement(Tooltip, { content: tooltip, length: "large", direction: tooltipDirection },
                    React.createElement(Icon, { type: "info-circle" }))))));
    }
}
TextArea.defaultProps = {
    disabled: false,
    error: false,
    maxHeight: 500,
    required: false,
    scrollable: false,
};
export default TextArea;
//# sourceMappingURL=text-area.js.map