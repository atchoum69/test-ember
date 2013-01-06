function initEmber() {
			
	// test si l'application existe deja, si c'est le cas, on l'a supprime
	if (window.MyApp != null) {
		window.MyApp.destroy();
	}
	
	// creation de l'application
	MyApp = Ember.Application.create({});
	
	// definition d'une classe Object (Model)
	MyApp.SiteModel = Ember.Object.extend({
		alt: null,
		src: null,
	});
	
	// definition d'une classe Controller avec une methode init qui instancie des objects du model
	MyApp.SiteController = Ember.ArrayController.extend({
		content: [],
		init: function() {
			this._super();
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Bebo', src:'http://2.bp.blogspot.com/-e-osk7xoa-I/T8-WxAU8rII/AAAAAAAAAI8/zOcsqT94_Xw/s320/BeboLogo.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Blogger', src:'http://3.bp.blogspot.com/-mK9dW_Vl0jU/ULUZ6kLK2jI/AAAAAAAAAGQ/HRJuct4JzXo/s1600/Blogger-logo.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Brightkite', src:'http://asset3.cbsistatic.com/cnwk.1d/i/bto/20080428/BrightKite-logo.png' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Delicious', src:'http://descary.com/wp-content/uploads/2009/2010/12/delicious-11.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Design Float', src:'http://www.designer-daily.com/wp-content/uploads/2008/03/logo-designfloat.png' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Digg', src:'http://thetechblock.com/wp-content/uploads/2012/07/digg-logo-blue.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Evernote', src:'http://www.roadtoentrepreneur.com/wp-content/uploads/2012/03/evernote-logo-1.png' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Facebook', src:'http://www.elitis.ca/blogue/wp-content/uploads/2011/06/facebook_logo.png' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Flickr', src:'http://www.thetechblock.com/wp-content/uploads/2012/04/flickr.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Friendfeed', src:'http://static.ddmcdn.com/gif/friendfeed-3.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Google+', src:'http://cdn.bitrebels.netdna-cdn.com/wp-content/uploads/2013/01/google-plus-business-page-5.jpg' }) 
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'LinkedIn', src:'http://4.bp.blogspot.com/-mdB4PJB1ito/T8NdgffA6uI/AAAAAAAAAZs/G18r0I-QF9g/s320/linkedin_logo.png' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'MySpace', src:'http://blog.cgsm.com/wp-content/uploads/2011/01/myspace-logo-in-high-resolution-300x235.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Netvibes', src:'http://www.geekozor.com/wp-content/uploads/2010/03/netvibes-logo-300x114.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Pinterest', src:'http://www.autourduweb.fr/wp-content/uploads/2012/03/pinterest-google-chrome-500x375.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Reddit', src:'http://cdn.socialmediaexaminer.com/wp-content/uploads/2012/08/bb-reddit.png?9d7bd4' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Rss Feed', src:'http://increaserss.com/wp-content/uploads/rss-feeds-.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'StumbleUpon', src:'http://www.mysocialagency.com/images/stories/blog/2011/social%20media%20agency%20leeds.png' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Technocrati', src:'http://www.co.morris.nj.us/learning20/images/technorati.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Tumblr', src:'http://deathandtaxesmag.wpengine.netdna-cdn.com/wp-content/uploads/2012/12/tumblr-hacked-gnaa.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Twitter', src:'http://www.lesinrocks.com/wp-content/thumbnails/uploads/2012/10/twitter-icon-pack2-604x432-604x432.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Vimeo', src:'http://www.zachklein.com/hello/298464/400/vimeo-2006.04.18-13.46.49.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Yelp', src:'http://www.geoinweb.com/wp-content/uploads/2012/10/yelp.jpg' })
			);
			this.pushObject(
				MyApp.SiteModel.create({ alt: 'Youtube', src:'http://www.gspia.pitt.edu/Portals/0/images/logo/youtube-logo.jpg' })
			);
		}
	});
	
	// definition d'une vue qui permet d'instancier une autre vue si le curseur de souris est au dessus de la vue principal
	MyApp.SiteView = Ember.View.extend({
		content: null,
		mouseEnter: function(event) {
			MyApp.maPreview = MyApp.PreviewView.create({templateName: 'preview', content: this._parentView.content, monStyle: 'top: ' + (event.pageY - 10) + "px;" + ' left: ' + (event.pageX + 30) + "px; display: block;"});
			MyApp.maPreview.appendTo('#container');
		},
		mouseLeave: function(evt) {
			MyApp.maPreview.remove();
		}
	});
	
	// definition de la vue de type preview
	MyApp.PreviewView = Ember.View.extend({
		content: null,
		templateName: 'preview',
		monStyle: null
	});
	
	// instancie mon controller
	MyApp.monController = MyApp.SiteController.create();
}

$(document).ready(function() {
	$("button").click(initEmber);
});
