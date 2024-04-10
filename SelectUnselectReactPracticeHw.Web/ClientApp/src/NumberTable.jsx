import React from 'react';
import { produce } from 'immer';
import NumberRow from './NumberRow';
import SelectedNumberRow from './SelectedNumberRow';

class NumberTable extends React.Component {

    state = {

        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    onAddClick = () => {
        const min = 100
        const max = 999
        const rand = Math.floor(Math.random() * (max - min + 1)) + 1
        const nextState = produce(this.state, draft => {
            draft.numbers.push(rand)
        })

        this.setState(nextState)
    }

    onSelectedClick = (n) => {
        const { selectedNumbers } = this.state
        if (selectedNumbers.includes(n)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(number => number !== n) })
        } else {
            this.setState({ selectedNumbers: [...selectedNumbers, n] })
        }
    }

    onLockClick = (sn) => {
        const { lockedNumbers } = this.state
        if (lockedNumbers.includes(sn)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(number => number !== sn) })
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, sn] })
        }
    }

    render() {

        const { numbers } = this.state
        const { selectedNumbers } = this.state
        const { lockedNumbers } = this.state

        return (
            <div className='container' style={{ marginTop: 60 }}>
                <div className='col-md-12'>
                    <button className='btn btn-success btn lg w-100' onClick={this.onAddClick}>ADD</button>
                </div>

                <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
                    <table className='table table-hover table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!numbers.length && <h3>No numbers added yet</h3>}
                            {!!numbers.length && numbers.map(n => <NumberRow
                                onSelectedClick={() => this.onSelectedClick(n)}
                                isSelected={selectedNumbers.includes(n)}
                                isLocked={lockedNumbers.includes(n) }
                                number={n} />)}
                        </tbody>
                    </table>
                </div>
                <div className='row p-5 rounded' style={{ backgroundColor: 'rgb(233, 235, 239)' }}>
                    <div className='col-md-offset-3'>
                        <h3>Selected Numbers</h3>
                        <ul className='list-group'>
                            {!!selectedNumbers.length && selectedNumbers.map(sn => <SelectedNumberRow
                                number={sn}
                                onLockClick={() => this.onLockClick(sn)}
                                isLocked={lockedNumbers.includes(sn) } />)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NumberTable