// eslint-disable-next-line no-undef
module.exports = {
  async up(db) {
    await db.collection('tacos').updateMany(
      {},
      { $set: { hardShell: false } }  // Set the 'hardShell' field to false
    );
  },

  async down(db) {
    await db.collection('tacos').updateMany(
      {},
      { $unset: { hardShell: "" } }  // Remove the 'hardShell' field
    );
  }
};
