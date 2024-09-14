import { showToast } from 'vant';
/**
 * 将文本复制到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<void>}
 */
export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true; // 返回成功
    } catch (err) {
        console.error('复制失败: ', err);
        return false; // 返回失败
    }
}

/**
* 显示提示消息
* @param {string} message - 提示消息内容
* @param {number} [duration=2000] - 提示消息显示的时长（毫秒）
*/
export function showMessage(message, duration = 2000) {
    showToast(message, { duration });
}