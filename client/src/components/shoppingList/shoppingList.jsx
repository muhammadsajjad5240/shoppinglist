import React, {useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItems } from '../../redux/actions/itemActions';
const ShoppingList = (props) => {
    useEffect(() => {
        props.getItems()
        props.deleteItems()
    }, [props.getItems])
    const deleteItem = (id) => {
        props.deleteItems(id)
    }
    return (
        <Container>
            <ListGroup>
                {/* <TransitionGroup className="shopping-list"> */}
                    {props.items.items && props.items.items.length > 0 ? props.items.items.map((item, i) => {
                        return (
                            <div  key={i}>
                             {/* <CSSTransition key={i} timeout={500} className="fade" > */}
                                <ListGroupItem  key={i}>
                                    <Button
                                        className="remove-btn"
                                        color="dange"
                                        size="sm" onClick={()=>deleteItem(item._id)}
                                    >&times;</Button>
                                    <ul>
                                        {/* <li>{item.name}</li> */}
                                        {item.name}
                                    </ul>
                                </ListGroupItem>
                             {/* </CSSTransition> */}
                            </div>
                        )
                    }) : null}
                {/* </TransitionGroup> */}
            </ListGroup>
        </Container >
    )
}
const mapStateTPoProps = (state) => {
    return {
        items: state.item
    }
}
export default connect(mapStateTPoProps, { getItems, deleteItems })(ShoppingList);