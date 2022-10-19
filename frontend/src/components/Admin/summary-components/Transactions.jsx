import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

const Transactions = () => {
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)

            try {
                const res = await axios.get(`/orders/?new=true`)

                setOrders(res.data)

            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])


    return(
        <StyledTransactions>
            {isLoading ? (
                <p>Transactions loading...</p>
            ) : (
                <>
                    <h3>Latest transactions</h3>
                    {
                        orders?.map((order, index) => <Transaction key={index}>
                            <p>{order.user_email}</p>

                            <p>  ${(order.total_price / 100).toLocaleString()}</p>
                            
                            <p>{moment(order.createdAt).fromNow()}</p>
                        </Transaction>)
                    }
                </>
            )}
        </StyledTransactions>
    )
}

export default Transactions

const StyledTransactions = styled.div`
    background: rgb(48, 51, 78);
    color: rgba(234, 234, 255, 0.87);
    padding: 1rem;
    border-radius: 5px;
`

const Transaction = styled.div`
    display: flex;
    font-size: 14px;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 3px;
    background: rgba(38, 198, 249, 0.12);
    p {
        flex: 1;
        margin-right: 4px;
    }
    &:nth-child(even) {
        background: rgba(102, 108, 255, 0.12)
    }
`