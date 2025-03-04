const utils = {
    // ===== 公共颜色映射（提取重复逻辑） =====
    getColorByScore(score, colorMap) {
        return colorMap[score] || colorMap.default;
    },

    // ===== 心理综合评分 =====
    psychoScore: {
        colorMap: {
            1: '#74C045', 2: '#0E77FF', 3: '#F4D127',
            4: '#F4A627', 5: '#EF5655', default: '#3A8542'
        },
        labelMap: ['', '优秀', '良好', '一般', '较差', ''],
        // 颜色
        color(score) {
            return this.getColorByScore(score, this.colorMap);
        },
        // 标签
        label(score) {
            return this.labelMap[score] || '';
        }
    },

    // ===== 负面情绪 =====
    negativeMood: {
        colorMap: ['', '#74c045', '#2d99fd', '#f4a627', '#ef5655'],
        labelMap: ['', '较低', '偏高', '较高', '过高'],
        images: [
            '',
            "https://diag.wuzhengai.com/rppgimages/emotion61.png",
            "https://diag.wuzhengai.com/rppgimages/emotion62.png",
            "https://diag.wuzhengai.com/rppgimages/emotion63.png",
            "https://diag.wuzhengai.com/rppgimages/emotion64.png",
            "https://diag.wuzhengai.com/rppgimages/emotion65.png"
        ],
        // 颜色
        color(score) {
            return this.colorMap[score] || '';
        },
        // 标签
        label(score) {
            return this.labelMap[score] || '较低';
        },
        // 图片
        image(score) {
            return this.images[score] || this.images[1];
        }
    },

    // ===== 正面情绪 =====
    positiveMood: {
        colorMap: ['', '#74c045', '#2d99fd', '#f4a627', '#ef5655'],
        labelMap: ['', '充足', '较高', '较低', '过低'],
        images: [
            '',
            "https://diag.wuzhengai.com/rppgimages/emotion61.png",
            "https://diag.wuzhengai.com/rppgimages/emotion62.png",
            "https://diag.wuzhengai.com/rppgimages/emotion63.png",
            "https://diag.wuzhengai.com/rppgimages/emotion64.png",
            "https://diag.wuzhengai.com/rppgimages/emotion65.png"
        ],
        // 颜色
        color(score) {
            return this.colorMap[score] || '';
        },
        // 标签
        label(score) {
            return this.labelMap[score] || '充足';
        },
        // 图片
        image(score) {
            return this.images[score] || this.images[1];
        }
    },

    // ===== 心理能力 =====
    moodAbility: {
        colorMap: ['', '#74c045', '#2d99fd', '#f4a627', '#ef5655'],
        labelMap: ['', '优秀', '良好', '一般', '较差'],
        images: [
            '',
            "https://diag.wuzhengai.com/rppgimages/emotion61.png",
            "https://diag.wuzhengai.com/rppgimages/emotion62.png",
            "https://diag.wuzhengai.com/rppgimages/emotion63.png",
            "https://diag.wuzhengai.com/rppgimages/emotion64.png",
            "https://diag.wuzhengai.com/rppgimages/emotion65.png"
        ],
        // 颜色
        color(score) {
            return this.colorMap[score] || '';
        },
        // 标签
        label(score) {
            return this.labelMap[score] || '优秀';
        },
        // 图片
        image(score) {
            return this.images[score] || this.images[1];
        }
    },

    // ===== 风险因子颜色 =====
    riskFactorColor(dataType) {
        const colorMap = {
            1: '#EF6C6B', 2: '#74C045', 3: '#EF6C6B', 4: '#385C8B', default: '#385C8B'
        };
        return colorMap[dataType] || colorMap.default;
    },

    // ===== 指数标签（按类型分类） =====
    indexLabel(name, score) {
        const labelMap = {
            '焦虑': ['较低', '轻度焦虑', '中度焦虑', '重度焦虑'],
            '抑郁': ['较低', '轻度抑郁', '中度抑郁', '重度抑郁'],
            '压力': ['较低', '轻度压力', '中度压力', '重度压力'],
            '失眠': ['睡眠充足', '轻度失眠', '中度失眠', '重度失眠'],
            '疲劳': ['精力充沛', '轻度疲劳', '中度疲劳', '重度疲劳'],
            '易怒': ['较低', '轻度易怒', '中度易怒', '重度易怒'],
            '情绪指数': ['较高', '偏低', '较低', '过低']
        };
        return labelMap[name]?.[score - 1] || '较低';
    }
};