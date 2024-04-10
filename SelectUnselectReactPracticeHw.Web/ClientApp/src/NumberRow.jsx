import React from 'react';

class NumberRow extends React.Component {

    render() {

        const { number } = this.props
        const { onSelectedClick } = this.props
        const { isSelected } = this.props
        const { isLocked } = this.props

        return (
            <tr>
                <td>{number}</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'danger' : 'success'}`}
                        onClick={onSelectedClick}
                        disabled={isLocked}>
                        {isSelected ? 'Remove from Selected' : 'Add to Selected'}
                    </button>
                </td>
            </tr>
        )
    }
}

export default NumberRow;