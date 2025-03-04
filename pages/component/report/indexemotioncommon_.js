const utils = {

    // 工具函数（颜色）
    psychoMoodAnalyzeData_psychoScore_Color(score) {
        switch (score) {
            case 1:
                return '#74C045'; // 优秀（绿色）
            case 2:
                return '#0E77FF'; // 良好（蓝色）
            case 3:
                return '#F4D127'; // 一般（浅黄）
            case 4:
                return '#F4A627'; // 较差（橙黄）
            case 5:
                return '#EF5655'; // 更差（红色）
            default:
                return '#3A8542'; // 默认颜色
        }
    },

// 工具函数（评分标签）
    psychoMoodAnalyzeData_psychoScore_Label(score) {
        switch (score) {
            case 1:
                return '优秀';
            case 2:
                return '良好';
            case 3:
                return '一般';
            case 4:
                return '较差';
            default:
                return ''; // 默认空字符串
        }
    },

    // ===== 负面情绪 =====
    // 颜色
    getNegativeMoodColor(score) {
        const colors = ["", "#74c045", "#2d99fd", "#f4a627", "#ef5655"];
        return colors[score] || ""; // 默认空字符串
    },
    // 标签
    getNegativeMoodLabel(score) {
        const labels = ["", "较低", "偏高", "较高", "过高"];
        return labels[score] || "较低"; // 默认值
    },

    // ===== 正面情绪 =====
    // 颜色
    getPositiveMoodColor(score) {
        const colors = ["", "#74c045", "#2d99fd", "#f4a627", "#ef5655"];
        return colors[score] || "";
    },
    // 标签
    getPositiveMoodLabel(score) {
        const labels = ["", "充足", "过高", "较低", "过低"];
        return labels[score] || "充足";
    },

    // ===== 心理能力 =====
    // 颜色
    getMoodAbilityColor(score) {
        const colors = ["", "#74c045", "#2d99fd", "#f4a627", "#ef5655"];
        return colors[score] || "";
    },
    // 标签
    getMoodAbilityLabel(score) {
        const labels = ["", "优秀", "良好", "一般", "较差"];
        return labels[score] || "优秀";
    },

    // 获取情绪/能力标签颜色
    getMoodAbilityColor(score) {
        const colorMap = ["", "#74c045", "#2d99fd", "#f4a627", "#ef5655"];
        return colorMap[score] || "#999"; // 默认灰色
    },

    // ===== 负面情绪颜色 =====
    psychoMoodAnalyzeData_negativeMoodData_moodScore_Color(score) {
        const colorMap = {
            1: '#74C045', // 绿色
            2: '#1890FF', // 蓝色
            3: '#F4D127', // 浅黄
            4: '#F4A627', // 橙黄
            5: '#EF5655', // 红色
            default: '#3A8542' // 默认深绿
        };
        return colorMap[score] || colorMap.default;
    },

    // ===== 负面情绪标签 =====
    psychoMoodAnalyzeData_negativeMoodData_moodScore_Label(score) {
        const labels = ["较低", "较低", "偏高", "较高", "过高"];
        return labels[score] || "较低"; // 默认值
    },

    // ===== 负面情绪图片 =====
    psychoMoodAnalyzeData_negativeMoodData_moodScore_Image(score) {
        const images = [
            "", // 0（无意义）
            "https://diag.wuzhengai.com/rppgimages/emotion61.png",
            "https://diag.wuzhengai.com/rppgimages/emotion62.png",
            "https://diag.wuzhengai.com/rppgimages/emotion63.png",
            "https://diag.wuzhengai.com/rppgimages/emotion64.png",
            "https://diag.wuzhengai.com/rppgimages/emotion65.png"
        ];
        return images[score] || images[1]; // 默认使用 score=1 的图片
    },

    // ===== 负面情绪评分颜色 =====
    psychoMoodAnalyzeData_negativeMoodData_moodScore_Color(score) {
        const colorMap = {
            1: '#74C045', // 绿色
            2: '#1890FF', // 蓝色
            3: '#F4D127', // 浅黄
            4: '#F4A627', // 橙黄
            5: '#EF5655', // 红色
            default: '#3A8542' // 默认深绿
        };
        return colorMap[score] || colorMap.default;
    },

    // ===== 负面情绪标签 =====
    psychoMoodAnalyzeData_negativeMoodData_moodScore_Label(score) {
        const labels = ["较低", "较低", "偏高", "较高", "过高"];
        return labels[score] || "较低"; // 默认值
    },

    // ===== 负面情绪图片 =====
    psychoMoodAnalyzeData_negativeMoodData_moodScore_Image(score) {
        const images = [
            "", // 0（无意义）
            "https://diag.wuzhengai.com/rppgimages/emotion61.png",
            "https://diag.wuzhengai.com/rppgimages/emotion62.png",
            "https://diag.wuzhengai.com/rppgimages/emotion63.png",
            "https://diag.wuzhengai.com/rppgimages/emotion64.png",
            "https://diag.wuzhengai.com/rppgimages/emotion65.png"
        ];
        return images[score] || images[1]; // 默认使用 score=1 的图片
    },

    // ===== 指数颜色（val 对象） =====
    val_score_Color(score) {
        const colorMap = {
            1: '#74C045', // 绿色
            2: '#2D99FD', // 蓝色
            3: '#FBAD3A', // 橙色
            4: '#EF6C6B', // 红色
            default: '#74C045' // 默认绿色
        };
        return colorMap[score] || colorMap.default;
    },

    // ===== 指数标签（按 val.name 分类） =====
    val_name_score_Label(name, score) {
        const labelMap = {
            '焦虑': ['较低', '轻度焦虑', '中度焦虑', '重度焦虑'],
            '抑郁': ['较低', '轻度抑郁', '中度抑郁', '重度抑郁'],
            '压力': ['较低', '轻度压力', '中度压力', '重度压力'],
            '失眠': ['睡眠充足', '轻度失眠', '中度失眠', '重度失眠'],
            '疲劳': ['精力充沛', '轻度疲劳', '中度疲劳', '重度疲劳'],
            '易怒': ['较低', '轻度易怒', '中度易怒', '重度易怒']
        };
        return labelMap[name]?.[score - 1] || '较低';
    },

    // ===== 风险因子颜色 =====
    val1_dataType_Color(dataType) {
        const colorMap = {
            1: '#EF6C6B', // 红色（偏低）
            2: '#74C045', // 绿色（正常）
            3: '#EF6C6B', // 红色（偏高）
            4: '#385C8B', // 深蓝（临界值）
            default: '#385C8B' // 默认深蓝
        };
        return colorMap[dataType] || colorMap.default;
    },
    // ===== 正面情绪评分颜色 =====
    psychoMoodAnalyzeData_positiveMoodData_moodScore_Color(score) {
        const colorMap = {
            1: '#74C045', // 绿色
            2: '#1890FF', // 蓝色
            3: '#F4D127', // 浅黄
            4: '#F4A627', // 橙黄
            5: '#EF5655', // 红色
            default: '#3A8542' // 默认深绿
        };
        return colorMap[score] || colorMap.default;
    },

    // ===== 正面情绪标签 =====
    psychoMoodAnalyzeData_positiveMoodData_moodScore_Label(score) {
        const labels = ["严重异常", "充足", "较高", "较低", "过低"];
        return labels[score] || "严重异常"; // 默认值
    },

    // ===== 正面情绪图片 =====
    psychoMoodAnalyzeData_positiveMoodData_moodScore_Image(score) {
        const images = [
            "", // 0（无意义）
            "https://diag.wuzhengai.com/rppgimages/emotion61.png",
            "https://diag.wuzhengai.com/rppgimages/emotion62.png",
            "https://diag.wuzhengai.com/rppgimages/emotion63.png",
            "https://diag.wuzhengai.com/rppgimages/emotion64.png",
            "https://diag.wuzhengai.com/rppgimages/emotion65.png"
        ];
        return images[score] || images[1]; // 默认使用 score=1 的图片
    },



    // ===== 指数标签（正面情绪专用） =====
    val_name_score_Label_positive(name, score) {
        const labelMap = {
            '情绪指数': ['较高', '偏低', '较低', '过低'],
            // 其他类型可按需扩展
        };
        return labelMap[name]?.[score - 1] || '较高';
    },
// ===== 心理能力评分颜色 =====
    psychoMoodAnalyzeData_moodAbilityData_moodScore_Color(score) {
        const colorMap = {
            1: '#74C045', // 绿色
            2: '#1890FF', // 蓝色
            3: '#F4D127', // 浅黄
            4: '#F4A627', // 橙黄
            5: '#EF5655', // 红色
            default: '#3A8542' // 默认深绿
        };
        return colorMap[score] || colorMap.default;
    },

    // ===== 心理能力评分标签 =====
    psychoMoodAnalyzeData_moodAbilityData_moodScore_Label(score) {
        const labels = ["优秀", "良好", "一般", "较差"];
        return labels[score - 1] || "优秀"; // 默认值
    },

    // ===== 心理能力图片 =====
    psychoMoodAnalyzeData_moodAbilityData_moodScore_Image(score) {
        const images = [
            "", // 0（无意义）
            "https://diag.wuzhengai.com/rppgimages/emotion61.png",
            "https://diag.wuzhengai.com/rppgimages/emotion62.png",
            "https://diag.wuzhengai.com/rppgimages/emotion63.png",
            "https://diag.wuzhengai.com/rppgimages/emotion64.png",
            "https://diag.wuzhengai.com/rppgimages/emotion65.png"
        ];
        return images[score] || images[1]; // 默认使用 score=1 的图片
    }

};