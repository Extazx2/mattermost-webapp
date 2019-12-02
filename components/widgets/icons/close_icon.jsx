// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class CloseIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.close'
                    defaultMessage='Close Icon'
                >
                    {(ariaLabel) => (
                        <svg
                            width='16px'
                            height='16px'
                            viewBox='0 0 24 24'
                            role='img'
                            aria-label={ariaLabel}
                        >
                            <path
                                className='path_stroke'
                                d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
                            />
                        </svg>
                    )}
                </FormattedMessage>
            </span>
        );
    }
}
