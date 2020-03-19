

export const KEYS = {
    CURR_Q: "CURRENT_QUESTIONNAIRE",
    Q_COUNT: "CURRENT_Q_SUBMISSIONS",
    Q_SUB_KEY_PREFIX: "Q_SUBMISSION_"
}

export const Q_TYPES = {
    CIRCLE_SLIDER: 'CircleSlider',
    SWITCH: 'Switch',
}

export const DEFAULT_FORM = [
    {
        titleStr: "How do you feel today?",
        qType: Q_TYPES.CIRCLE_SLIDER,
    },
    {
        titleStr: "Did you eat today?",
        qType: Q_TYPES.SWITCH,
    },
    {
        titleStr: "Did you have class today?",
        qType: Q_TYPES.SWITCH,
    },
    {
        titleStr: "How anxious did you feel today?",
        qType: Q_TYPES.CIRCLE_SLIDER,
    },
    {
        titleStr: "How stress did you feel today?",
        qType: Q_TYPES.CIRCLE_SLIDER,
    },
    {
        titleStr: "Overall, was today a good day?",
        qType: Q_TYPES.SWITCH,
    }
]
