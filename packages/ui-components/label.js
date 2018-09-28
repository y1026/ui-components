import React from 'react';
import Styles from './styles/label.module.scss';
import cn from './utilities/classnames';
export const Label = ({ className, text, type }) => (React.createElement("span", { className: cn('label', Styles.label, className, 'label-' + type) }, text));
Label.defaultProps = {
    className: '',
    type: 'draft',
};
export default Label;
//# sourceMappingURL=label.js.map