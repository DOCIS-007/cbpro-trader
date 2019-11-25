const chart = (state = {period_list: []}, action) => {
    switch (action.type) {
        case 'CHANGE_ACTIVE_PERIOD':
            return {
                ...state,
                active_period: action.period_name
            }
        case 'ADD_PERIOD':
            return {
                ...state,
                period_list: [...state.period_list, action.period_name]
            }
        case 'UPDATE_CANDLESTICKS':
            return {
                ...state,
                candlesticks: action.candlesticks
            }
        case 'UPDATE_INDICATORS':
            return {
                ...state,
                indicators: action.indicators
            }
        default:
            return state
    }
}

export default chart;