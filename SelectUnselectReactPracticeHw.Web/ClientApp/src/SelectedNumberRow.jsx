import React from 'react';

class SelectedNumberRow extends React.Component {

    render() {

        const { number } = this.props
        const { onLockClick } = this.props
        const { isLocked } = this.props

        return (
            <li className='list-group-item'>
                {number}
                <button className={`btn btn-${isLocked ? 'danger' : 'primary'}`}
                    onClick={onLockClick}>
                    {!isLocked ? 'Lock' : 'Unlock'}
                </button>
            </li>
        )
    }
}

export default SelectedNumberRow;