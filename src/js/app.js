App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load nfts.
    $.getJSON('../nfts.json', function(data) {
      var nftsRow = $('#nftRow');
      var nftTemplate = $('#nftTemplate');

      for (i = 0; i < data.length; i ++) {
        nftTemplate.find('.panel-title').text(data[i].title);
        nftTemplate.find('img').attr('src', data[i].picture);
        nftTemplate.find('.nft-author').text(data[i].author);
        nftTemplate.find('.nft-date').text(data[i].date);
        nftTemplate.find('.nft-price').text(data[i].price);
        
        nftTemplate.find('.btn-transfer').attr('data-id', data[i].id);
        nftTemplate.find('.btn-mint').attr('data-id', data[i].id);

        nftsRow.append(nftTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    
  },

  initContract: function() {
    
  },

  bindEvents: function() {
    
  },

  markTransferred: function() {
    
  },

  markMinted: function() {
    
  },

  handleMint: function(event) {

  },

  handleTransfer: function(event) {
    
  },

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
