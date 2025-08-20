// ToolurPromo Ad Embed Script
(function() {
    // Check if already loaded
    if (document.getElementById('toolurpromo-ad-container')) return;
    
    // Create container
    const container = document.createElement('div');
    container.id = 'toolurpromo-ad-container';
    
    // Add CSS styles
    const styles = `
        <style id="toolurpromo-ad-styles">
            #toolurpromo-ad-container {
                position: relative;
                display: inline-block;
                z-index: 999999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            }
            
            .toolurpromo-ad {
                width: 320px;
                height: 400px;
                background: #ffffff;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                position: relative;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            
            .toolurpromo-ad:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
            }
            
            .toolurpromo-ad .ad-label {
                position: absolute;
                top: 16px;
                left: 20px;
                font-size: 12px;
                color: #6c757d;
                font-weight: 400;
                letter-spacing: 0.5px;
            }
            
            .toolurpromo-ad .logo-section {
                position: absolute;
                top: 60px;
                left: 20px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .toolurpromo-ad .logo {
                width: 24px;
                height: 24px;
                background: #4285f4;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            }
            
            .toolurpromo-ad .logo::before {
                content: '';
                width: 12px;
                height: 12px;
                background: white;
                border-radius: 2px;
                position: relative;
            }
            
            .toolurpromo-ad .logo::after {
                content: '';
                position: absolute;
                width: 6px;
                height: 6px;
                background: #4285f4;
                border-radius: 1px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            
            .toolurpromo-ad .brand-name {
                font-size: 16px;
                font-weight: 600;
                color: #212529;
                letter-spacing: -0.5px;
            }
            
            .toolurpromo-ad .headline {
                position: absolute;
                top: 120px;
                left: 20px;
                right: 20px;
                font-size: 28px;
                font-weight: 700;
                color: #212529;
                line-height: 1.2;
                letter-spacing: -0.8px;
            }
            
            .toolurpromo-ad .description {
                position: absolute;
                top: 210px;
                left: 20px;
                right: 20px;
                font-size: 15px;
                color: #495057;
                line-height: 1.5;
                font-weight: 400;
            }
            
            .toolurpromo-ad .cta-button {
                position: absolute;
                bottom: 30px;
                left: 20px;
                right: 20px;
                height: 50px;
                background: linear-gradient(135deg, #4285f4 0%, #1a73e8 100%);
                border: none;
                border-radius: 8px;
                color: white;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                box-shadow: 0 2px 8px rgba(66, 133, 244, 0.3);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .toolurpromo-ad .cta-button:hover {
                background: linear-gradient(135deg, #1a73e8 0%, #1557b0 100%);
                box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
                transform: translateY(-1px);
            }
            
            @media (max-width: 768px) {
                .toolurpromo-ad {
                    width: 280px;
                    height: 350px;
                }
                .toolurpromo-ad .headline {
                    font-size: 24px;
                }
                .toolurpromo-ad .description {
                    font-size: 14px;
                }
            }
        </style>
    `;
    
    // Add HTML content
    const html = `
        <div class="toolurpromo-ad" onclick="ToolurPromo.handleClick()">
            
            <div class="logo-section">
                <div class="logo"></div>
                <div class="brand-name">AIHumanizer.com</div>
            </div>
            
            <div class="headline">Humanize AI Text for Better SEO</div>
            
            <div class="description">
                Transform AI content into natural, human-like writing that ranks higher. Perfect for students, professionals, and blogs that need human-like writing.
            </div>
            
            <button class="cta-button">Try Now</button>
        </div>
    `;
    
    // Insert styles into head
    document.head.insertAdjacentHTML('beforeend', styles);
    
    // Set container content
    container.innerHTML = html;
    
    // Append to body
    document.body.appendChild(container);
    
    // Create global handler object
    window.ToolurPromo = {
        handleClick: function() {
            // Add your tracking/analytics here
            console.log('ToolurPromo ad clicked');
            
            // Redirect to your landing page
            window.open('https://aihumanizer.com/?toolur', '_blank');
        }
    };
    
})();
