import * as React from 'react'

export default class extends React.Component<{isActive: boolean}, {}>{
    render() {
        const {isActive} = this.props
        return (
            <div className={`cell${isActive? ' cell--active' : ''}`}></div>
        )
    }
}