import { canLevelUp, xpRange } from '../lib/levelling.js';
import { levelup } from '../lib/canvas.js';
let handler = async (_0xba0487, {
  conn: _0x30a2b7
}) => {
  let _0x14ea94 = _0x30a2b7.getName(_0xba0487.sender);
  let _0x3436ab = global.db.data.users[_0xba0487.sender];
  if (!canLevelUp(_0x3436ab.level, _0x3436ab.exp, global.multiplier)) {
    let {
      min: _0x50f3f0,
      xp: _0x381232,
      max: _0x3be474
    } = xpRange(_0x3436ab.level, global.multiplier);
    throw ("\n┌───⊷ *المستوي*\n▢ الاسم : *" + _0x14ea94 + "*\n▢ المستوي : *" + _0x3436ab.level + "*\n▢ XP : *" + (_0x3436ab.exp - _0x50f3f0) + '/' + _0x381232 + "*\n└──────────────\n\nانت تحتاج الي *" + (_0x3be474 - _0x3436ab.exp) + "* *XP* لرفع مستواك\n").trim();
  }
  let _0x1af64d = _0x3436ab.level * 0x1;
  while (canLevelUp(_0x3436ab.level, _0x3436ab.exp, global.multiplier)) {
    _0x3436ab.level++;
  }
  if (_0x1af64d !== _0x3436ab.level) {
    let _0x2cb577 = "🎊 عاش يحب " + _0x30a2b7.getName(_0xba0487.sender) + "    المستوي:";
    let _0x212c94 = ("\n┌─⊷ *المستوي*\n▢ المستوي السابق : *" + _0x1af64d + "*\n▢ المستوي الحالي : *" + _0x3436ab.level + "*\n└──────────────\n\n*_كلما تفاعلت مع المحرز البوت ارتفع مستواك_*\n").trim();
    try {
      const _0x30c9ea = await levelup(_0x2cb577, _0x3436ab.level);
      _0x30a2b7.sendFile(_0xba0487.chat, _0x30c9ea, "levelup.jpg", _0x212c94, _0xba0487);
    } catch (_0x1d7862) {
      _0xba0487.reply(_0x212c94);
    }
  }
};
handler.help = ['levelup'];
handler.tags = ['xp'];
handler.command = ['لفل', 'lvl', "levelup", 'مستواي', "مستوا"];
export default handler;
