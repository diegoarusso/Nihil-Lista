export const MEMBERS = Object.freeze(["diegoarusso@gmail.com", "abel.nihil@gmail.com", "lucas.e.lopeztorres@gmail.com", "lucasdanielmartinezaguirre@gmail.com", "alenfilia@gmail.com"]);
export function isBandMember(user) { return !!user && user.emailVerified === true && MEMBERS.includes(user.email); }
export function canApproveTransfer(user) { return isBandMember(user) && user.email === MEMBERS[0]; }
